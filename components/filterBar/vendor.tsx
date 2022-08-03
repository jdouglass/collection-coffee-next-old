import { Checkbox, createStyles, UnstyledButton, Group, Box, ThemeIcon, Collapse, StylesApiProvider } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import { useState } from "react";
import styles from './filterBar.module.css';

const vendorList = ['Rogue Wave', 'Subtext', 'Monogram', 'Pirates of Coffee', 'Revolver'];

const useStyles = createStyles((theme) => ({
  link: {
    fontWeight: 400,
    width: '100%',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    paddingLeft: '25px',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));

export default function Vendor() {
  const [opened, setOpened] = useState(false);
  const ChevronIcon = IconChevronRight;
  return(
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={styles.filterCategoryTitle}>
        <Group position="apart">
          <Box>
            <Box>Vendor</Box>
          </Box>
          {
            <ChevronIcon
              className={styles.chevron}
              size={14}
              style={{
                transform: opened ? `rotate(90deg)` : 'none',
              }}
            />
          }
        </Group>
      </UnstyledButton>
      {
        <Collapse in={opened}>
          <Checkbox.Group
            orientation="vertical"
            spacing='xs'
            className={styles.filterCategoryOption}
          >
            {
              vendorList.map((vendor) => {
                return(<Checkbox value={vendor} key={vendor} label={vendor} className={styles.filterCheckbox} />);
              }
            )}
          </Checkbox.Group>
        </Collapse>}
    </>
  );
}