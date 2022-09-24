/*
    Create an object type called Equity Response which informs the data from equity estimate into
    a typescript object.
*/
export interface EquityResponse{
    board: Card[];
    opponent_hands: Hand[];
    equity: number;
    player_hand: Hand;
}

export type Hand = [Card, Card];

export type Board = [number, State];

enum State {
    Flop,
    River,
    Turn
}

/*
    Creates a card with the relevant values
*/
export interface Card {
    suit: string;
    value: string;
}

// export type Card = string; // this is for later