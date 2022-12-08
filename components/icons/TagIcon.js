import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

import styles from './styles/general-icon-styles.module.scss';

export const TagIcon = (size) => {

  const defaultStyle = styles.generalIconTiny;
  const iconStyle = size === "small" ? styles.generalIconSmall : defaultStyle;

  return (
    <div className={iconStyle}>
        <FontAwesomeIcon icon={faTag} />
    </div>
  )
}

export default TagIcon;

