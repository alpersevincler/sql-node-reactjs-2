const config = {
    user: 'CodingWithAlper',
    password: '1234',
    server: 'LAPTOP-B5A8-PMD',
    database: 'SQL-Tutorial',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        encrypt: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;