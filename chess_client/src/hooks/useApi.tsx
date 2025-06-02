
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { API_URL } from '../utils/constants';
// import { flushSync } from 'react-dom';

type ChessPiece = {
  PAWN: string;
  KNIGHT: string;
  BISHOP: string;
  ROOK: string;
  QUEEN: string;
  KING: string;
};

type ChangePiece = {
  WHITE: ChessPiece;
  BLACK: ChessPiece;
};

const useApi = () => {
  const [pieces, setPieces] = useState<ChangePiece | null>(null); 

  useEffect(() => {
    getPieces();
  }, []);

  async function getPieces() {
    try {
      const res = await fetch(API_URL + '/pieces', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', res);
      const data = await res.json();
      if (res.status === 200) {
        setPieces(data);
      }
    } catch (err) {
      toast.error('Error al obtener las piezas: ' + (err as string));
    }
  }

  type SuccessMoveResponse = {
    move_made: string
    turn: 'white' | 'black'
    legal_moves: string[]
    error?: string 
  }

  type ErrorMoveResponse = {
    legal_moves?: string[]
    error: string
  }

      async function makeMove(move: string): Promise<[number, SuccessMoveResponse | ErrorMoveResponse]> {
        try {
            const res = await fetch(API_URL + `/make_move/${move}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            return [res.status, data];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            const errorResponse: ErrorMoveResponse = { error: 'Bad Request' };
            return [400, errorResponse]; 
        }
    }

    async function newGame(): Promise<[status: number, data: SuccessMoveResponse | ErrorMoveResponse]> {
      try{
        const res = await fetch(API_URL + '/reset', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      })
      const data = await res.json();
      return [res.status, data];
      }catch(err){
        toast.error(err as string)
        const errorResponse: ErrorMoveResponse = { error: 'Bad Request' };
        return [400, errorResponse];
      }
    }


  return { pieces, makeMove, newGame }; 
};

export default useApi;
