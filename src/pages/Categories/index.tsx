import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'
import Loader from '../../components/Loader'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
          isLoading={isLoadingAction}
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
          isLoading={isLoadingSport}
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
          isLoading={isLoadingFight}
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="gray"
          id="rpg"
          isLoading={isLoadingRPG}
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
          isLoading={isLoadingSimulation}
        />
      </>
    )
  }
  return <Loader />
}

export default Categories
