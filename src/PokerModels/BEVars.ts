/*
    Create an object type called Equity Response which transforms the data from equity estimate into a typescript
    object.
*/
export interface EquityResponse{
    board: [string, unknown][]; //Board as an array
    opponent_hands: [string, unknown][];
    equity: number;
    player_hand: any [];
}