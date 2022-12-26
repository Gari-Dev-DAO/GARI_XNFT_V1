import HomeVideoContainer from "./HomeVideoContainer";
import ResponsiveFlatList from "./ResponsiveFlatList";

const AllNfts = ({ nfts }) => {
  const renderNfts = ({ item }) => {
    return <HomeVideoContainer item={item} />;
  };

  return <ResponsiveFlatList data={nfts} renderItem={renderNfts} />;
};

export default AllNfts;
