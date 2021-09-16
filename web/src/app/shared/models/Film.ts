export class Film {
  id!: string
  name!: string
  video!: string
  image!: String
  description!: String
  categoriesString?: any
  categories!: [
    {
      id: Number,
      name: String
    }
  ]
  catForm: any
}
