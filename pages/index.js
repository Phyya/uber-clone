import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link"

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://" />
          <Profile>
            <Name>Naphee</Name>
            <UserImage />
          </Profile>
        </Header>
        <ActionButtons>
        <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage /> Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;
const ActionButtons = tw.div`
flex  
`;
const ActionButton = tw.div`
flex flex-col flex-1 bg-gray-200 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`;
const ActionButtonImage = tw.img`
h-3/5
`;
const UberLogo = tw.img``;
const Profile = tw.div`
flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-small
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px
`;
const InputButton = tw.div`
h-20 bg-gray-100 text-2xl p-4 flex items-center mt-8
`;
