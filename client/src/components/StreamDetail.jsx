import React from 'react';

const StreamDetail = ({totalViews, watchingNow, streamTitle, gamePoster, category}) => (
    <div id='stream-detail-section'>
        <div id='header-container'>
            <div style={{ 'width': '100%', 'display': 'grid' }} >
                <div style={{ 'width': '100%' }}>
                    <h2 id='stream-title'>{streamTitle}</h2>
                </div>
                <div style={{'display': 'flex', 'marginTop': '.3125rem'}}>
                    <img id='game-poster' className='cursor' src={gamePoster} alt={category} width='40px' />
                    <div id='game-details'>
                        <p className='catergory-text'>
                            Category:
                        </p>
                        <p className='catergory-text purple-text cursor underline'>
                            {category}
                        </p>
                    </div>
                </div>
            </div>
            <div id='current-and-total-views'
            >
                <div id='watching-now-container'>
                    <svg style={{ fill: '#e91916'}} xmlns="http://www.w3.org/2000/svg"
                    className="view-icon tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path fill-rule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clip-rule="evenodd"/></g></svg>
                    <div id='watching-now'>
                        {watchingNow}
                    </div>
                </div>
                <div id='total-views-container'>
                    <svg style={{ fill: '#adadb8'}} xmlns="http://www.w3.org/2000/svg" className="view-icon tw-icon__svg" width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"><g><path d="M11.998 10a2 2 0 11-4 0 2 2 0 014 0z"/><path fillRule="evenodd" d="M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z" clipRule="evenodd"/></g></svg>
                    <div id='total-views'>
                        {totalViews}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default StreamDetail;