const agg = [
  {
    '$match': {
      'product': new ObjectId('6749af95011ea8d0e0d2ad40')
    }
  }, {
    '$group': {
      '_id': '$product', 
      'averageRating': {
        '$avg': '$rating'
      }, 
      'numOfReviews': {
        '$sum': 1
      }
    }
  }
]