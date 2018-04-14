import React from "react";
import "./feed-timeline.css";

const FeedTimeline = ({ news }) => (
    <div className="feed_timeline">
        {news.map(({ id, title, image, author, date, isFeatured }) => (
            <div key={id} className="feed_timeline__item">
                {isFeatured && (
                    <span className="feed_timeline__item_featured_badge">
                        Featured!
                    </span>
                )}
                <img
                    className="feed_timeline__item_image"
                    src={image}
                    alt={title}
                />
                <div className="feed_timeline__item_timeline">
                    <h3 className="feed_timeline__item_title">{title}</h3>
                    <span className="feed_timeline__item_author">{author}</span>
                    <span className="feed_timeline__item_date">{date}</span>
                </div>
            </div>
        ))}
    </div>
);

export default FeedTimeline;
