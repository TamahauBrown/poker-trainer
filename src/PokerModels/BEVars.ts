/*
    Create an object type called Equity Response which informs the data from equity estimate into
    a typescript object.
*/
export interface EquityResponse{
    board: Card[];
    opponent_hands: Hand[];
    player_hand: Hand;
}

export interface EquityEstimateUserInputResponse {
    true_equity: number,
    close_enough: boolean,
}

export type Hand = [Card, Card];

export type Board = [number, State];

enum State {
    Flop,
    River,
    Turn
}

export type Card = string;