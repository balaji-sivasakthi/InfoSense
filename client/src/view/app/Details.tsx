import { useParams } from "react-router-dom"
import AppLayout from "../../layouts/AppLayout";
import ArticleDetails from "../../components/Article";

type Props = {}


const articleData = [
  {
    "data": {
      "id":"1",
      "category":"tech",
      "title": "BJP seals poll deal with JD(S) to checkmate Congress in Karnataka",
      "summary": "Former BJP CM Basavaraj Bommai claimed the tie-up will change the state’s political dynamics.In reaction, the state Congress was quick to take adig at JD(S), questioning the party’s secular ideology.Deputy chief minister DK Shivakumar said: “It’s about their [JD(S)] survival.\nGowda had earlier said that he would not go (with BJP) at any cost.\nI don’t know what will happen to their party and MLAs.\nI wish them all the best.”Exuding confidence about Congress’ prospects in the elections, chief minister Siddaramaiah said: “We are not bothered about who will have ties with whom.\nOf these, JD(S) currently holds only Hassan, while the rest are held by BJP.Of the five seats JD(S) is believed to be insisting on, Mandya is the most contentious, as it is currently represented by independent Sumalatha, who had supported BJP.",
      "content": "JD(S) bargaining for 5 seats, but BJP is willing to give it 4\n\nBENGALURU/NEW DELHI: BJP and JD(S) will fight next year's Lok Sabha elections together in Karnataka, former chief minister and senior BJP functionary BS Yediyurappa said in Bengaluru on Friday.When the deal with BJP is inked, JD(S) will be an important addition to the NDA fold from the south.Though the two are yet to formalise a seat-sharing pact, according to Yediyurappa, JD(S) has agreed to contest four seats, while BJP will fight from the remaining 24.JD(S) leader and ex-PM HD Deve Gowda met Union home minister Amit Shah and BJP chief JP Nadda, during which BJP is learnt to have agreed to spare five seats for JD(S). This differs from the four mentioned by BSY.Sources said the two parties had planned to formally announce their tie-up on September 13 after the conclusion of the G20 summit, but BSY, who is also a BJP parliamentary board member, let the cat out of the bag before the official declaration.After announcing that BJP and JD(S) will fight the 2024 Lok Sabha polls in Karnataka together, ex-CM and BJP veteran BS Yediyurappa predicted the alliance will win 25-26 out of 28 seats in the state. Former BJP CM Basavaraj Bommai claimed the tie-up will change the state’s political dynamics.In reaction, the state Congress was quick to take adig at JD(S), questioning the party’s secular ideology.Deputy chief minister DK Shivakumar said: “It’s about their [JD(S)] survival. But I don’t know how their ideology works. Gowda had earlier said that he would not go (with BJP) at any cost. They have built a party based on a certain ideology. I don’t know what will happen to their party and MLAs. I wish them all the best.”Exuding confidence about Congress’ prospects in the elections, chief minister Siddaramaiah said: “We are not bothered about who will have ties with whom. We will seek votes from the people, and we are confident that we will win more seats.”JD(S) functionaries, meanwhile, were more tight-lipped about the alliance, saying talks were still in their initial stage and nothing has been finalised.Commenting on the latest developments, former minister and JD(S) core committee head GT Devegowda said: “What we got to know from Deve Gowdaji (former prime minister and party patriarch) himself is that they had only discussed the alliance, but nothing had been finalised. Such things must be dis cussed with the local leaders before coming to a decision as this is crucial for the success of the alliance.”According to sources, although BJP agreed to spare four seats, JD(S) is bargaining hard for five: Hassan, Mandya, Tumakuru, Chikkaballapur and Kolar — all considered as the party’s stronghold in the Old Mysuru region. Of these, JD(S) currently holds only Hassan, while the rest are held by BJP.Of the five seats JD(S) is believed to be insisting on, Mandya is the most contentious, as it is currently represented by independent Sumalatha, who had supported BJP. The party has already promised to field her from Mandya in 2024, but if the seat goes to JD(S), BJP may have to find another constituency for Sumalatha and in all probability, that alternative seat will be Bengaluru North, which is currently represented by former union minister DV Sadanand Gowda.",
      "tags": [
        "seals",
        "karnataka",
        "know",
        "checkmate",
        "mandya",
        "deal",
        "chief",
        "bjp",
        "party",
        "congress",
        "gowda",
        "poll",
        "yediyurappa",
        "jds",
        "seats",
        "minister"
      ]
    }
  },
  {
    "data": {
      "id":"2",
      "category":"business",
      "title": "BJP seals poll deal with JD(S) to checkmate Congress in Karnataka",
      "summary": "Former BJP CM Basavaraj Bommai claimed the tie-up will change the state’s political dynamics.In reaction, the state Congress was quick to take adig at JD(S), questioning the party’s secular ideology.Deputy chief minister DK Shivakumar said: “It’s about their [JD(S)] survival.\nGowda had earlier said that he would not go (with BJP) at any cost.\nI don’t know what will happen to their party and MLAs.\nI wish them all the best.”Exuding confidence about Congress’ prospects in the elections, chief minister Siddaramaiah said: “We are not bothered about who will have ties with whom.\nOf these, JD(S) currently holds only Hassan, while the rest are held by BJP.Of the five seats JD(S) is believed to be insisting on, Mandya is the most contentious, as it is currently represented by independent Sumalatha, who had supported BJP.",
      "content": "JD(S) bargaining for 5 seats, but BJP is willing to give it 4\n\nBENGALURU/NEW DELHI: BJP and JD(S) will fight next year's Lok Sabha elections together in Karnataka, former chief minister and senior BJP functionary BS Yediyurappa said in Bengaluru on Friday.When the deal with BJP is inked, JD(S) will be an important addition to the NDA fold from the south.Though the two are yet to formalise a seat-sharing pact, according to Yediyurappa, JD(S) has agreed to contest four seats, while BJP will fight from the remaining 24.JD(S) leader and ex-PM HD Deve Gowda met Union home minister Amit Shah and BJP chief JP Nadda, during which BJP is learnt to have agreed to spare five seats for JD(S). This differs from the four mentioned by BSY.Sources said the two parties had planned to formally announce their tie-up on September 13 after the conclusion of the G20 summit, but BSY, who is also a BJP parliamentary board member, let the cat out of the bag before the official declaration.After announcing that BJP and JD(S) will fight the 2024 Lok Sabha polls in Karnataka together, ex-CM and BJP veteran BS Yediyurappa predicted the alliance will win 25-26 out of 28 seats in the state. Former BJP CM Basavaraj Bommai claimed the tie-up will change the state’s political dynamics.In reaction, the state Congress was quick to take adig at JD(S), questioning the party’s secular ideology.Deputy chief minister DK Shivakumar said: “It’s about their [JD(S)] survival. But I don’t know how their ideology works. Gowda had earlier said that he would not go (with BJP) at any cost. They have built a party based on a certain ideology. I don’t know what will happen to their party and MLAs. I wish them all the best.”Exuding confidence about Congress’ prospects in the elections, chief minister Siddaramaiah said: “We are not bothered about who will have ties with whom. We will seek votes from the people, and we are confident that we will win more seats.”JD(S) functionaries, meanwhile, were more tight-lipped about the alliance, saying talks were still in their initial stage and nothing has been finalised.Commenting on the latest developments, former minister and JD(S) core committee head GT Devegowda said: “What we got to know from Deve Gowdaji (former prime minister and party patriarch) himself is that they had only discussed the alliance, but nothing had been finalised. Such things must be dis cussed with the local leaders before coming to a decision as this is crucial for the success of the alliance.”According to sources, although BJP agreed to spare four seats, JD(S) is bargaining hard for five: Hassan, Mandya, Tumakuru, Chikkaballapur and Kolar — all considered as the party’s stronghold in the Old Mysuru region. Of these, JD(S) currently holds only Hassan, while the rest are held by BJP.Of the five seats JD(S) is believed to be insisting on, Mandya is the most contentious, as it is currently represented by independent Sumalatha, who had supported BJP. The party has already promised to field her from Mandya in 2024, but if the seat goes to JD(S), BJP may have to find another constituency for Sumalatha and in all probability, that alternative seat will be Bengaluru North, which is currently represented by former union minister DV Sadanand Gowda.",
      "tags": [
        "seals",
        "karnataka",
        "know",
        "checkmate",
        "mandya",
        "deal",
        "chief",
        "bjp",
        "party",
        "congress",
        "gowda",
        "poll",
        "yediyurappa",
        "jds",
        "seats",
        "minister"
      ]
    }
  }
]


function Details({}: Props) {
    const {id} = useParams()
    const {data} = articleData.filter(data=>data.data.id==id)[0]
    return (
    <AppLayout>
      { data
        ? <ArticleDetails info={data}/>
        : <p>Not found</p>
      }
    </AppLayout>
  )
}

export default Details