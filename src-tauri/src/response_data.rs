use poker_lib::{CardDeck, Hand};
use serde::{Deserialize, Serialize};
use strum::EnumIter;

mod percentage {
    use serde::{Deserialize, Deserializer, Serializer};

    pub fn serialize<S>(percentage: &f64, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        // Round to 2 dp
        serializer.serialize_f64((percentage * 10000.0).round() / 100.0)
    }

    pub fn deserialize<'de, D>(deserializer: D) -> Result<f64, D::Error>
    where
        D: Deserializer<'de>,
    {
        // TODO: Figure out how to undo the floating deserializing thing.
        f64::deserialize(deserializer)
    }
}

// impl From<f64> for Percentage {
//     fn from(input: f64) -> Self {
//         Self(input)
//     }
// }

// impl Serialize for Percentage {
//     fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
//     where
//         S: serde::Serializer,
//     {
//         serializer.serialize_f64((self.0 * 100.0).round())
//     }
// }

// impl Deserialize for Percentage {
//     fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
//     where
//         D: serde::Deserializer<'de>,
//     {
//         deserializer.deserialize_f64(visitor)
//     }
// }

#[derive(Debug, Clone, Serialize)]
pub struct EquityEstimateUserInputResponse {
    #[serde(with = "percentage")]
    pub true_equity: f64,
    pub close_enough: bool,
}

#[derive(Debug, Clone, Serialize)]
pub struct EquityEstimateResponse {
    pub player_hand: poker_lib::Hand,
    // TODO: Not too sure if we should be adding probability here
    pub opponent_hands: Vec<poker_lib::Hand>,
    pub board: Vec<poker_lib::Card>,
}

impl EquityEstimateResponse {
    pub fn new_from_deck(
        deck: &mut CardDeck,
        board_cards: usize,
        num_opponent_hands: usize,
    ) -> EquityEstimateResponse {
        EquityEstimateResponse {
            board: deck.deal_cards(board_cards).0.unwrap(),
            player_hand: Hand::from_vec(&deck.deal_cards(2).0.unwrap()),
            opponent_hands: (0..num_opponent_hands)
                .map(|_| Hand::from_vec(&deck.deal_cards(2).0.unwrap()))
                .collect(),
        }
    }
}
