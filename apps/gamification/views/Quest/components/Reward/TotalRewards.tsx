import { useTranslation } from '@pancakeswap/localization'
import { Card, Flex, InfoIcon, Text } from '@pancakeswap/uikit'
import { styled } from 'styled-components'
import { AssetSet } from 'views/Quest/components/Reward/AssetSet'

const TextBlock = styled(Flex)`
  position: absolute;
  top: calc(50% - 1px);
  right: 16px;
  z-index: 2;
  padding: 2px 0;
  transform: translateY(-50%);
  background-color: ${({ theme }) => theme.colors.backgroundAlt};

  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: -28px;
    width: 28px;
    height: 100%;
    background: ${({ theme }) =>
      `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, ${theme.colors.backgroundAlt} 100%)`};
  }
`

export const TotalRewards = () => {
  const { t } = useTranslation()
  return (
    <Card style={{ width: '100%' }} marginBottom={['8px']}>
      <Flex padding="16px">
        <AssetSet size={28} />
        <TextBlock m="auto">
          <Text bold mr="4px">
            999 rewards
          </Text>
          <InfoIcon color="textSubtle" style={{ alignSelf: 'center' }} />
        </TextBlock>
      </Flex>
    </Card>
  )
}
