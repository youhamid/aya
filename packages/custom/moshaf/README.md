README: moshaf

db.Moshaf.insert({
rakmSafha: '1',
ayattesSafha: cat( 'safha1.txt' )
 })
  db.Moshaf.drop()
  show collections
  db.Moshaf.find().pretty()
  show dbs
  use local
  db.Moshaf.findOne({
rakmSafha: '1'
})

