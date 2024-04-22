import { useTranslation } from '@pancakeswap/localization'
import { Box } from '@pancakeswap/uikit'
import { Banner } from 'views/Home/components/Banner'
import { Quests } from 'views/Home/components/Quests'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <Banner title={t('Explore Quests')} subTitle={t('Earn by contributing to the community')} />
      <Quests />
    </Box>
  )
}
