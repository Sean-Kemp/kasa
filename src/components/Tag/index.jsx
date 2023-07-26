import React from 'react';
import '../../styles/component-styles/tag.css';

function Tag({ tag }) {
      return (
            <div className="tag">
                  <span className="tag__text">{tag}</span>
            </div>
      );
}

export default Tag;
