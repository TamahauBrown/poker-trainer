#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod response_data;

use std::sync::Mutex;

use response_data::*;
use poker_lib::CardDeck;
use tauri::Manager;
use tauri::PhysicalSize;

static LAST_EQUITY: Mutex<Option<f64>> = Mutex::new(None);

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let main_window = app.get_window("main").unwrap();
      main_window.set_size(PhysicalSize::new(1600, 900)).unwrap();
      main_window.set_min_size(Some(PhysicalSize::new(1600, 900))).unwrap();
      main_window.set_resizable(false).unwrap();
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![
      equity_estimate,
      equity_estimate_user_input,
      equity_estimate_2,
      equity_estimate_3
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn equity_estimate() -> EquityEstimateResponse {
  let mut deck = CardDeck::new().unwrap();

  let ans = EquityEstimateResponse::new_from_deck(&mut deck, 3, 1);
  let answer_equity = poker_lib::exact_equity_from_input(ans.player_hand, &ans.opponent_hands, &ans.board);
  *LAST_EQUITY.lock().unwrap() = Some(answer_equity);
  ans
}

#[tauri::command]
fn equity_estimate_2() -> EquityEstimateResponse {
  let mut deck = CardDeck::new().unwrap();
  
  let ans = EquityEstimateResponse::new_from_deck(&mut deck, 4, 3);
  let answer_equity = poker_lib::exact_equity_from_input(ans.player_hand, &ans.opponent_hands, &ans.board);
  *LAST_EQUITY.lock().unwrap() = Some(answer_equity);
  ans
}

#[tauri::command]
fn equity_estimate_3() -> EquityEstimateResponse {
  let mut deck = CardDeck::new().unwrap();

  let ans = EquityEstimateResponse::new_from_deck(&mut deck, 5, 5);
  let answer_equity = poker_lib::exact_equity_from_input(ans.player_hand, &ans.opponent_hands, &ans.board);
  *LAST_EQUITY.lock().unwrap() = Some(answer_equity);
  ans
}

#[tauri::command]
fn equity_estimate_user_input(user_input: f64) -> EquityEstimateUserInputResponse {
  let true_equity = LAST_EQUITY.lock().unwrap().unwrap_or(0.0);
  dbg!(user_input);
  let ans = EquityEstimateUserInputResponse {
    true_equity,
    close_enough: ((user_input / 100.0) - true_equity).abs() < 0.1,
  };
  ans
}
