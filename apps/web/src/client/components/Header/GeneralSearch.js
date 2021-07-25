import React from 'react'
import { useParams, useHistory } from 'react-router'
import { Utils } from 'pcmli.umbrella.uni-core'
import { isEmpty } from 'lodash'
import { routesDef } from '../../config/routes'

const GeneralSearch = ({ onBack }) => {
  const [search, setSearch] = React.useState('')
  let { options } = useParams()
  const history = useHistory()
  options = decodeURIComponent(options)
  options = Utils.jsonTryParse(options)
  options = options?.search

  React.useEffect(() => {
    if (!isEmpty(options)) setSearch(options)
  }, [options])

  const onSubmit = (e) => {
    e?.preventDefault()
    history?.push(routesDef.ProductListPage.altPath({ search }))
  }

  return (
    <form onSubmit={onSubmit} className="search">
      <div className="input-group w-100">
        <div className="input-group-prepend d-inline-block d-lg-none">
          <button className="btn btn-secondary" type="button" onClick={onBack}>
            <i className="fa fa-arrow-left" />
          </button>
        </div>
        <input
          name="search-text"
          type="search"
          className="form-control"
          placeholder='Use double quotes between words for exact search. e.g "SGDD-36876625LP"'
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="submit">
            <i className="fa fa-search" /> <span className="ml-1 d-none d-lg-inline-block">Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default GeneralSearch
