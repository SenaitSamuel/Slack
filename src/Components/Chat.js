import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import db from "../firebase";

function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timeStamp", "asc")
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [roomId]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong># {roomDetails?.data().name}</strong>
              </h4>
              <StarBorderIcon />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoIcon />
                Details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessage>
            {roomMessages?.docs.map((doc) => {
              const { message, timeStamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timeStamp={timeStamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
          </ChatMessage>
          <ChatBottom ref={chatRef} />

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 10px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatBottom = styled.div`
  padding-bottom: 200px;
`;
const ChatMessage = styled.div`
  padding-bottom: 200px;
`;
