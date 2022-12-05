import { useEffect, useState } from 'react'
import { SearchCompany } from './SearchCompany'
import { SearchNoResults } from './SearchNoResults'
import { ShownCompanies } from './ShownCompanies'
import { JsData } from '../../Backend/Data'
import { convertSearchData } from '../../Backend/convertSearchData'

const allCompanies = JsData.searchData.companies

export const Search = ({ searchField }) => {
  const [companies, setCompanies] = useState('')

  useEffect(() => {
    setCompanies(ShownCompanies(searchField, allCompanies))
  }, [searchField])

  if (companies.length === 0 && searchField !== '') return <SearchNoResults />

  if (companies.length > 0)
    return (
      <div>
        {companies.map((company) => {
          const convertedData = convertSearchData({ ...company })

          return (
            <SearchCompany
              key={company.arrayIndex}
              arrayIndex={company.arrayIndex}
              convertedData={convertedData}
            />
          )
        })}
      </div>
    )

  return
}
