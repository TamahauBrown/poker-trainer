use std::str::FromStr;

use playing_cards::core::{Card, CardDeck};
use poker_lib::Hand;

fn main() {
    // dbg!(poker_lib::Hand(Card::try_from("5s".to_owned()).unwrap(), Card::try_from("Th".to_owned()).unwrap()).to_string());
    let mut deck = CardDeck::new().unwrap();

    poker_lib::exact_equity_from_input(
        Hand::from_vec(&deck.deal_cards(2).0.unwrap()),
        Hand::from_vec(&deck.deal_cards(2).0.unwrap()),
        &deck.deal_cards(3).0.unwrap(),
    );
}
