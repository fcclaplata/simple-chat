import React from "react";
import Paper from 'react-md/lib/Papers';

import styles from './Message.scss'


export default ({ message }) => (
  <Paper component="message" zDepth={1} style={styles.message}>
    <author>
      { message.from }
    </author>
    <message-body>
      { message.text }
    </message-body>
  </Paper>
);
