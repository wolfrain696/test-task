import { AnyAction } from 'redux';

type AuctionsState = {
  title?: string
};

const auctions = (state: AuctionsState, action: AnyAction): AuctionsState => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default auctions;
