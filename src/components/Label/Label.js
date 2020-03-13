import React from 'react'

import { LabelRoot, Asterisk } from './Label.shards'

export const Label = ({ label, smaller = false }) => (
  <LabelRoot smaller={smaller}>
    <Asterisk>* </Asterisk>
    {label}
  </LabelRoot>
)