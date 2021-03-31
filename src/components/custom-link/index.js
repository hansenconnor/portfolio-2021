import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


export default class CustomLink extends React.Component {

  render() {

    const myLink = ({ className }) => (
      <Link
            className={className}
            to={this.props.to}
            replace={this.props.replace}
        >
          <div className="inline-block">
            <div className="relative flex items-center h-12 pl-10">
              <span className="mr-10 relative z-10">{this.props.children}</span>
              <div className="circle rounded-full border-2 border-gray-300 absolute right-0 top-0 h-12 w-12">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.90625 0.761719L5.71484 0.953125C5.57812 1.08984 5.57812 1.28125 5.71484 1.41797L10.582 6.28516H0.328125C0.136719 6.28516 0 6.44922 0 6.61328V6.88672C0 7.07812 0.136719 7.21484 0.328125 7.21484H10.582L5.71484 12.1094C5.57812 12.2461 5.57812 12.4375 5.71484 12.5742L5.90625 12.7656C6.04297 12.9023 6.23438 12.9023 6.37109 12.7656L12.1406 6.99609C12.2773 6.85938 12.2773 6.66797 12.1406 6.53125L6.37109 0.761719C6.23438 0.625 6.04297 0.625 5.90625 0.761719Z" fill="#111111"/>
                </svg>
              </div>
            </div>
          </div>
        </Link>
    )

    const StyledLink = styled(myLink)`
      
      & div > div {
        transition: 0.3s cubic-bezier(0.8,0,0.2,1) all;
      }
      .circle {
        overflow: hidden;
      }
      span {
        transition: 0.3s cubic-bezier(0.8,0,0.2,1) margin;
      }
      svg {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 15px;
        transition: 0.3s cubic-bezier(0.8,0,0.2,1) right;
      }

      &:hover {
        color: #FFF;

        div > div {
          padding-left: 20px;
        }

        span {
          margin-right: 20px;
        }

        .circle {
          width: 100%;
          border-color: #111;
          background: #111;
        }

        svg {
          right: -100%;
        }
      }
    `;

    return (
      <StyledLink className={this.props.className}/>
        // <Link
        //     className={this.props.className}
        //     to={this.props.to}
        //     replace={this.props.replace}
        // >
        //   <div class="relative flex items-center h-12">
        //     <span class="mr-10 relative z-10">{this.props.children}</span>
        //     <div className="rounded-full border-2 border-gray-300 absolute right-0 top-0 h-12 w-12" />
        //   </div>
        // </Link>
    )
  }
}