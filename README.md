# RETAPPD

This project serves as a data visualization of the various beers I have tried. It focuses on my personal ratings vs the crowd and the different beer styles I have sampled. It also serves as a showcase for my SQL knowledge.

# Create Database
CREATE TABLE "Untappd" (
	"Beer"	TEXT,
	"Brewery"	TEXT,
	"My_rating"	REAL,
	"Community_rating"	REAL,
	"Style"	TEXT,
	"ABV"	REAL,
	"IBU"	INTEGER
, "Family" TEXT)
