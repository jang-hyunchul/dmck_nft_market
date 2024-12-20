import { useParams } from 'react-router-dom';
import data from '../../../../data/data-components/data-SecNewListed.js';
import ListTag from './ListTag';
import { useRecoilValue, useRecoilState } from 'recoil';
import selectedAuctionAtom from '../../../../atoms/selectedAuction';
import React from 'react';
import contracts from '../../../../constants/contracts';
import { IBid, IAuction } from '../../../../types/index';
import { useInterval } from 'usehooks-ts';
import isAuctionFinishAtom from '../../../../atoms/isAuctionFinish';

function SectionBids(auction: IAuction) {
  const { id }: { id?: string } = useParams();
  const item = data[parseInt(id!) - 1];

  const [bids, setBids] = React.useState<IBid[]>([]);
  const [bidsCnt, setBidsCnt] = React.useState<number>();
  const [isAuctionFinish, setIsAuctionFinish] =
    useRecoilState(isAuctionFinishAtom);

  const getBids = async () => {
    
    setBidsCnt(auction.biddingList?.length);

    let bids: IBid[] = [];
    auction.biddingList?.map((a: any) => {
      bids = [
        ...bids,
        {
          bidId: a['bidId'],
          bidder: a['bidder'],
          price: a['price'],
          timestamp: a['timestamp'],
        },
      ];
    });
    setBids(bids.reverse());
  };

  
  useInterval(
    () => {
      getBids();
      setIsAuctionFinish(false);
    },
    isAuctionFinish ? 1000 : null
  );
  

  React.useEffect(() => {
    getBids();
  }, []);

  return (
			<ul>
        {bids.map((item, i) => (
          <ListTag key={i} {...item} />
        ))}
        {bids.length === 0 && 
          <li className="nodata">
            <p>Nothing here yet.</p>
          </li>
        }
      </ul>

  

  );
}

export default SectionBids;
