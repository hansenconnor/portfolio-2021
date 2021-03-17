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
              <div className="circle rounded-full border-2 border-gray-300 absolute right-0 top-0 h-12 w-12" />
            </div>
          </div>
        </Link>
    )

    const StyledLink = styled(myLink)`
      & div > div {
        transition: 0.3s cubic-bezier(0.8,0,0.2,1) all;
      }
      &:hover {
        color: #FFF;

        .circle {
          width: 100%;
          border-color: #111;
          background: #111;
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