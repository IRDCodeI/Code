install.packages("geosphere")
library(geosphere)

cuidad = data.frame(nombre = c("Quito", "Guayaquil", "Cuenca", "Ambato", "Azogues"),
                          lat = c(-0.2298, - 2.196101, -2.9005499, -1.2490799, -2.7396901),
                          lon = c(-78.524981, -79.8862076, -79.0045319, -78.6167526, -78.8486023))

geo = distm(cbind(cuidad$lon, cuidad$lat))/1000