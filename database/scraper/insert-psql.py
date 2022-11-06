from configparser import ConfigParser
import psycopg2
import json

with open('words.json') as f:
	mandarin = json.load(f)


def config(filename='database.ini', section='postgresql'):
    # create a parser
    parser = ConfigParser()
    # read config file
    parser.read(filename)

    # get section, default to postgresql
    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))

    return db

def insert_many(list):
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # read connection parameters
        params = config()

        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)
		
        # create a cursor
        cur = conn.cursor()
        
	# execute a statement
        sql = "INSERT INTO mandarin (traditional, simplified, pinyin, meaning) VALUES(%s, %s, %s, %s);"
        cur.executemany(sql,list)
        

        # display the PostgreSQL database server version
        db_version = cur.statusmessage
        print(db_version)

        conn.commit()
       
	# close the communication with the PostgreSQL
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')

        # "insert into ) values('"+
        #      + "', '" +
        #      + "', '" +
        #      + "', '" +
        #      + "');"
        # )

insertion_rows = []
for obj in mandarin:
    insertion_rows.append((obj['traditional'], obj['simplified'], obj['pinyin'], obj['meaning'],))

# print(insertion_rows)

if __name__ == '__main__':
    insert_many(insertion_rows)
