import React from 'react';
import Icon from '../../Icon';
import { getIcon } from '../../../utils';
import styles from './SourceCode.module.scss';

const SourceCode = ({ source }) => (
  <div className={styles['sourcecode']}>
    <a href={source}> Source Code </a>
    <Icon className={styles['sourcecode__icon']} icon={getIcon('github')} />
  </div>
);

export default SourceCode;
