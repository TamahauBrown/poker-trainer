use rust_poker::equity_calculator;
use rust_poker::hand_range::{get_card_mask, HandRange};
pub use playing_cards::core::Card;
pub use playing_cards::core::CardDeck;

#[derive(Debug, Clone, Copy)]
pub struct Hand(pub Card, pub Card);

impl Hand {
    pub fn to_string(&self) -> String {
        return format!("{}{}", self.0, self.1)
    }

    pub fn from_vec(vec_of_hands: &[Card]) -> Hand {
        if vec_of_hands.len() != 2 {
            panic!("Failed to pass in 2 cards");
        }
        Hand(vec_of_hands[0], vec_of_hands[1])
    }
}


pub fn exact_equity_from_input(hand: Hand, opp_hand: Hand, board: &[Card]) -> f64 {
    dbg!(hand, opp_hand, board);
    let range = HandRange::from_strings(vec![hand.to_string(), opp_hand.to_string()]);
    let board_mask = board.into_iter().fold("".to_owned(), |acc, c| acc + &c.to_string());
    let res = equity_calculator::exact_equity(&range, get_card_mask(&board_mask), 1).unwrap();
    dbg!(res.get_equity());
    return res.get_equity()[0];
}


// #[cfg(test)]
// mod tests {
//     use super::*;

//     #[test]
//     fn it_works() {
//         let result = add(2, 2);
//         assert_eq!(result, 4);
//     }
// }
