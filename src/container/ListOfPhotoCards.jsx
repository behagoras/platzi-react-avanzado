import withPhotos from '../hoc/withPhotos' // get photos from graphql
import { ListOfPhotoCardsComponent } from '../Components/PhotoCard/ListOfPhotoCards.jsx'

const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

export default ListOfPhotoCards
