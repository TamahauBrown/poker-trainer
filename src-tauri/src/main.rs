#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::sync::Mutex;

use poker_lib::Hand;
use strum::EnumIter;
use strum::IntoEnumIterator;
use serde::{Serialize, Deserialize};
use poker_lib::CardDeck;
use tauri::Manager;
use tauri::PhysicalSize;

const LAST_EQUITY: Mutex<Option<f64>> = Mutex::new(None);

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let main_window = app.get_window("main").unwrap();
      main_window.set_size(PhysicalSize::new(1600, 900)).unwrap();
      main_window.set_min_size(Some(PhysicalSize::new(1600, 900))).unwrap();
      main_window.set_resizable(false).unwrap();
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![get_exercises, equity_estimate, equity_estimate_user_input])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[derive(EnumIter, Serialize, Deserialize)]
enum Exercises {
  EquityEstimate
}

#[tauri::command]
fn get_exercises() -> Vec<Exercises> {
  return Exercises::iter().collect()
}

#[derive(Debug, Clone, Serialize)]
struct EquityEstimateResponse {
  player_hand: poker_lib::Hand,
  // TODO: Not too sure if we should be adding probability here
  opponent_hands: Vec<poker_lib::Hand>,
  board: Vec<poker_lib::Card>,
  // equity: f64,
}

#[tauri::command]
fn equity_estimate() -> EquityEstimateResponse {
  let mut deck = CardDeck::new().unwrap();

  let mut ans = EquityEstimateResponse {
    board: deck.deal_cards(3).0.unwrap(),
    player_hand: Hand::from_vec(&deck.deal_cards(2).0.unwrap()),
    opponent_hands: vec![Hand::from_vec(&deck.deal_cards(2).0.unwrap())],
    // equity: 0.0,
  };
  let answer_equity = poker_lib::exact_equity_from_input(ans.player_hand, ans.opponent_hands[0], &ans.board);
  *LAST_EQUITY.lock().unwrap() = Some(answer_equity);
  ans
}

#[derive(Debug, Clone, Serialize)]
struct EquityEstimateUserInputResponse {
  true_equity: f64,
  close_enough: bool,
}

#[tauri::command]
fn equity_estimate_user_input(user_input: f64) -> EquityEstimateUserInputResponse {
  let true_equity = LAST_EQUITY.lock().unwrap().unwrap_or(0.0);
  
  let ans = EquityEstimateUserInputResponse {
    true_equity,
    close_enough: (user_input - true_equity).abs() < 0.1,
  };
  ans
}
