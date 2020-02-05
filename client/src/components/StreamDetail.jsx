import React from 'react';

const StreamDetail = ({totalViews, watchingNow, streamTitle, gamePoster, category}) => (
    <div id='stream-detail-section'>
        <div id='header-container'>
            <div style={{ 'width': '100%', 'display': 'grid' }} >
                <div style={{ 'width': '100%' }}>
                    <h2 id='stream-title'>{streamTitle}</h2>
                </div>
                <div id='game-details'>Category: {category}</div>
            </div>
            <div id='current-and-total-views'
            >
                <div id='watching-now-container'>
                    <div id='watching-now'>{watchingNow} </div>
                </div>
                <div id='total-views-container'>
                    <div id='total-views'>
                        {totalViews}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default StreamDetail;