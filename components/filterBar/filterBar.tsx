import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import styles from './filterBar.module.css';
import Vendor from './vendor';

export default function FilterBar() {
  return (
    <div className={styles.filterBar}>
      <Accordion 
        allowMultiple 
        pl={2}
      >
        <Vendor />
      </Accordion>
    </div>
  )
}