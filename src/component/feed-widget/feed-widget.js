import React from "react";
import "./feed-widget.css";

const FeedWidget = ({ news }) => (
    <div className="feed_widget">
        {news.map(({ id, title, image, author, date }) => (
            <div key={id} className="feed_widget__item">
                <img className="feed_widget__image" src={image} alt={title} />
                <div className="feed_widget__content">
                    <h2 className="feed_widget__title">{title}</h2>
                    <span className="feed_widget__info">
                        <span className="feed_widget__author">{author}</span>
                        <span className="feed_widget__date">{date}</span>
                    </span>
                </div>
            </div>
        ))}
    </div>
);

export default FeedWidget;
