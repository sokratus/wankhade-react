import React from "react";
import styled from "styled-components";
import TextBlock from "./TextBlock";

const Left = styled.div`
  padding-right: 4rem;
  /* flex-shrink: 1.2; */
  display: flex;
  flex-direction: column;
`;

const contentLeft = () => {
  return (
    <Left>
      <TextBlock
        title="Monologue 💆‍♂️"
        desc="For last 4+ years, I have been working with Vuclip, a streaming company. My responsibilities vary from being a team leader to being the team's IT Guy. But in all seriousness, I have been able to make an impact on the lives of millions of people who use Viu to watch TV Shows and Movies to entertain themselves.
   
           As brutal as the streaming business can be, I have learned a lot by understanding our customers through in-person usability studies or online surveys. Viu operates in East Asia, the Middle East, and Africa. This has given me access and an opportunity to understand the behavior of people of different cultures.
           
           Being a senior designer, I understand the impact of design decisions on the overall business. Keeping that in mind, I've learned how to make decisions and allocate resources for something that would be a great experience and help improve critical KPIs."
      />
      <TextBlock
        title="Interests 🌮"
        desc="I classify as a computer geek in a design world. Apart from computers, I like making a nice meal or playing a little bit of Ukulele whenever I get time. I am a fan of reading history and visiting historical places and museums. I usually prefer to learn more about the Renaissance era.
   
           In the initial few days of my career, I did try—unsuccessfully, to become an illustrator who is also a front-end developer. Lately, I have been spending time learning front-end frameworks to bring my ideas closer to reality."
      />
      <TextBlock
        title="Tools 🧰"
        desc="Figma, Webflow, Principle app, After Effects, Photoshop, Illustrator, HTML, SASS, a little bit of JS—anything that will get me closer to my vision. Keynote, Google Docs, Notion, Dropbox Paper, Airtable, Zapier for project management."
      />
    </Left>
  );
};

export default contentLeft;
