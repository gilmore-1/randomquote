import { useEffect, useState } from "react";
import "./App.css";
import randomColor from "randomcolor";
import Quoteinterface from "./interface/quoteinterface";
import Wraper from "./components/Wraper/Wraper";
import { ThemeProvider } from "styled-components";
import {
  Buttons,
  NewQuote,
  QouteBox,
  QuoteAuthor,
  QuoteLeft,
  QuoteText,
  TumblrQuote,
  TweetQuote,
} from "./components/Quote/Quote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

function App() {
  const [color, setColor] = useState(randomColor());
  const [quote, setQoute] = useState<Quoteinterface | undefined>(undefined);
  const [randomNumber, setRandomNumber] = useState(0);

  const getQoute = async () => {
    axios({
      method: "get",
      url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    }).then(function (response) {
      setQoute(response.data);
    });
  };
  const GenrateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * quote?.quotes.length));
  };
  useEffect(() => {
    getQoute();
    setColor(randomColor());
  }, [randomNumber]);
  return (
    <ThemeProvider theme={{ color: color }}>
      <Wraper>
        <QouteBox>
          <QuoteText>
            <QuoteLeft icon="quote-left" />
            <span id="text">{quote?.quotes[randomNumber].quote}</span>
          </QuoteText>
          <QuoteAuthor>
            <span id="author">{quote?.quotes[randomNumber].author}</span>
          </QuoteAuthor>
          <Buttons>
            <TweetQuote
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
              href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22If%20you%20can%20dream%20it%2C%20you%20can%20achieve%20it.%22%20Zig%20Ziglar"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </TweetQuote>
            <TumblrQuote
              title="Post this quote on tumblr!"
              target="_blank"
              href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Zig%20Ziglar&amp;content=If%20you%20can%20dream%20it%2C%20you%20can%20achieve%20it.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
            >
              <FontAwesomeIcon icon={faTumblr} />
            </TumblrQuote>
            <NewQuote onClick={GenrateNumber}>New quote</NewQuote>
          </Buttons>
        </QouteBox>
      </Wraper>
    </ThemeProvider>
  );
}

export default App;
