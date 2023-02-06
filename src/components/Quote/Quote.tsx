import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
library.add(fas);

export const QouteBox = styled.div`
  border-radius: 3px;
  position: relative;
  width: 450px;
  padding: 40px 50px;
  display: table;
  background-color: #fff;
`;
export const QuoteText = styled.div`
  text-align: center;
  width: 450px;
  height: auto;
  clear: both;
  font-weight: 500;
  color: ${(props) => props.theme.color};

  font-size: 1.75em;
`;
export const QuoteAuthor = styled.div`
  width: 450px;
  height: auto;
  clear: both;
  padding-top: 20px;
  opacity: 1;
  font-size: 1em;
  text-align: right;
  color: ${(props) => props.theme.color};
`;
export const Buttons = styled.div`
  width: 550px;
  margin: auto;
  display: block;
`;
export const TweetQuote = styled.a`
  float: left;
  padding: 0px;
  padding-top: 8px;
  text-align: center;
  font-size: 1.2em;
  margin-right: 5px;
  height: 30px;
  width: 40px;
  background-color: ${(props) => props.theme.color};
`;
export const TumblrQuote = styled.a`
  float: left;
  padding: 0px;
  padding-top: 8px;
  text-align: center;
  font-size: 1.2em;
  margin-right: 5px;
  height: 30px;
  background-color: ${(props) => props.theme.color};

  width: 40px;
`;
export const NewQuote = styled.button`
  float: right;
  height: 38px;
  border: none;
  border-radius: 3px;
  color: #fff;
  background-color: ${(props) => props.theme.color};
  outline: none;
  font-size: 0.85em;
  padding: 8px 18px 6px 18px;
  margin-top: 30px;
  opacity: 1;
  cursor: pointer;
`;
export const QuoteLeft = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color};
  font-size: 1em;
  margin-right: 0.4em;
`;
