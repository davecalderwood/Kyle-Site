import React, { Component } from "react";

class Videos extends Component {
    render(){
    return (
        <div className="videos parallax">
        <div className="search">
        <div className="filler">filler</div>

        <form className="find" action="">
            <input type="search" placeholder="What are you looking for?"></input>
            <i class="icon"><img src="baseline-search-24px.svg" alt="search"></img></i>
        </form>
        {/* Sample videos pulled from Kyle's YouTube profile. */}
        <h3>UVU Player Profile 01 | Brianna Moeller</h3>
        <iframe className="movie" width="560" height="315" title="UVU Player Profile 01 | Brianna Moeller"
        src="https://www.youtube.com/embed/U366zJ7WrSg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        <h3>UVU Player Profile 02 | Jake Carr</h3>
        <iframe className="movie" width="560" height="315" title="UVU Player Profile 02 | Jake Carr" 
        src="https://www.youtube.com/embed/xmrfF8ma98U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        <h3>The Kyle Show | Episode 1</h3>
        <iframe className="movie" width="560" height="315" title="The Kyle Show | Episode 1" 
        src="https://www.youtube.com/embed/t6mRc_CHWp8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


            </div>
        </div>
    )
    }
}

export default Videos; 