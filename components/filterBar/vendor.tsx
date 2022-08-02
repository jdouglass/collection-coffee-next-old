import { AccordionItem, AccordionButton, Box, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

export default function Vendor() {
  return (
    <>
      <AccordionItem borderTop={0}>
          <>
            <h2>
              <AccordionButton
                fontSize='15px'
                fontWeight={600}
                pt={4}
                pb={4}
                _hover={{
                  background: 'white',
                  color: 'teal.600'
                }}>
                <Box flex='1' textAlign='left'>
                  Vendor
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel 
              fontSize='sm'
              pb={4}>
              Foo
            </AccordionPanel>
          </>
        </AccordionItem>
    </>
  )
}