import React, { useEffect, useState } from "react";
import axios from "axios";

const UserView = () => {
//   const [messages, setMessages] = useState([]);
//   const [moments, setMoments] = useState([]);

//   // Fetch all notifications (messages)
//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get("/api/notifications");
//       setMessages(response.data);
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//     }
//   };

//   // Fetch all memorable moments
//   const fetchMoments = async () => {
//     try {
//       const response = await axios.get("/api/moments");
//       setMoments(response.data);
//     } catch (error) {
//       console.error("Error fetching memorable moments:", error);
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//     fetchMoments();
//   }, []);

  return (
    <div className="user-view-main">
      <div className="message-box">
        <div className="box-header">
          <div className="box-left">
            <span>Jaan e Mann</span>
            <br />
            <br />
            <span>Happy Our First Anniversary</span>
            <br />
          </div>
          <img src="./Assets/Images/Background.png" />
        </div>
        <div className="box-body">
          <p>
            1 year passed. First of all ALHUMDULILLAH.
            <br />
            <br /> Alhumdulillah for this amazing year, Alhumdulillah for this
            amazing girl, Alhumdulillah for bringing her into my life,
            Alhumdulillah for getting to know her deeply, Alhumdulillah for all
            the honor I got from her, Alhumdulillah for all the sad days I got
            to spend with her, Alhumdulillah for all the arguments as they have
            helped us grow and become a better version of ourselves for each
            other, Alhumdulillah, literally for every thing.
            <br />
            <br />
            I am really the luckiest man alive. To have got such an amazing girl
            like you. Laiba, Allah has blessed me alot by giving you in my
            destiny. You are truly an amazing and graceful person. You deserve
            the best. The best partner to live your life with. The best Husband
            to depend upon. The best friend to share all you rants with. The
            best cuddle bear to embrace. The best student who can learn from
            your amazing character.
            <br />
            <br />
            I want to become all of that for you. I really really want to. This
            is my biggest goal to achieve in this Dunya. You are my Biggest
            asset Jasmine. You are my main reason of happiness for the past
            whole year. And I desperately want to it be same for the rest of Our
            lives. I want us to grow old together. I want us to be happy with
            each other, I want us to argue with each other, I want us to be mad
            at each other. Everything should be among YOU and ME.
            <br />
            <br />
            These Past few days have been very hard for us. I never wanted any
            of this to happen. I know, I mad mistakes, alot of them. And I know
            that you believe I'm not deliberately doing these. Because I have
            confidence in you. I have confidence in us. We both are invested in
            one another fully. Alhumdulillah for that too. Whatever You did, I
            have already forgiven you, And I want your forgiveness for whatever
            I did.
            <br />
            <br />
            Laiba! on 4 October 2023, I asked you to consider being my wife. You
            honored my with your "Yes". Now, I know these days are hard for you.
            I really wish I could help somehow. <br/> And Laiba, My Sweet heart, I am
            asking you again on 4 October 2024, If it's possible for you, please
            let's forget whatever happened these past few days. and Let's move
            on. Let's be cool with each other, Let's be funny with each other,
            Let's be clingy with another. Please Laiba. Please
            <br />
            <br />
            Soon, You're gonna be mine forever Insha'Allah. Let's talk about
            that day. Let's imagine that closeness. Let's imagine our breathes
            striking each other. Let's imagine ourselves in each other's
            embrace. Let's think of happy and adorable moments to lighten the
            mood, So that we can move on easily.
            <br />
            <br />
            Regards
            <br />
            Your Man to be
            <br />
          </p>
        </div>
      </div>
      {/* <h2>User View</h2>

      <div>
        <h3>Messages:</h3>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index}>
              <p>{message.message}</p>
              <small>{new Date(message.date).toLocaleDateString()}</small>
            </div>
          ))
        ) : (
          <p>No messages yet</p>
        )}
      </div>

      <div>
        <h3>Memorable Moments:</h3>
        {moments.length > 0 ? (
          moments.map((moment, index) => (
            <div key={index}>
              <h4>{moment.title}</h4>
              <p>{moment.description}</p>
              <small>{new Date(moment.date).toLocaleDateString()}</small>
              {moment.images.map((image, idx) => (
                <img key={idx} src={image} alt={`Moment image ${idx + 1}`} style={{ width: '200px', margin: '10px' }} />
              ))}
            </div>
          ))
        ) : (
          <p>No memorable moments yet</p>
        )}
      </div> */}
    </div>
  );
};

export default UserView;
