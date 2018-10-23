import React, { Component } from "react";

class Videos extends Component {
    render(){
    return (
        <div className="home">
        <div className="search">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
            <form action="/hms/accommodations" method="GET"> 
            <div class="row">
                <div class="col-xs-6 col-md-4">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" id="txtSearch"/>
                    <div class="input-group-btn">
                    <button class="btn btn-primary" type="submit">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
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