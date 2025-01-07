CREATE TABLE Partners (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(255) NOT NULL,
    LastName NVARCHAR(255) NOT NULL,
    Address NVARCHAR(255),
    PartnerNumber CHAR(20) NOT NULL UNIQUE,
    CroatianPIN CHAR(11) NULL,
    PartnerTypeId INT NOT NULL CHECK (PartnerTypeId IN (1, 2)),
    CreatedAtUtc DATETIME DEFAULT GETUTCDATE(),
    CreateByUser NVARCHAR(255) NOT NULL,
    IsForeign BIT NOT NULL,
    ExternalCode NVARCHAR(20) NOT NULL UNIQUE,
    Gender CHAR(1) NOT NULL CHECK (Gender IN ('M', 'F', 'N'))
);

CREATE TABLE Policies (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    PolicyNumber NVARCHAR(15) NOT NULL UNIQUE,
    Amount DECIMAL(18, 2) NOT NULL,
    PartnerId INT NOT NULL,
    FOREIGN KEY (PartnerId) REFERENCES Partners(Id) ON DELETE CASCADE
);

INSERT INTO Partners (FirstName, LastName, Address, PartnerNumber, CroatianPIN, PartnerTypeId, CreateByUser, IsForeign, ExternalCode, Gender)
VALUES 
('Ivan', 'Horvat', 'Ulica kralja Tomislava 15, Zagreb', '12345678901234567890', '12345678901', 1, 'ivan.horvat@example.com', 0, 'EXT123456789', 'M'),
('Ana', 'Kovačić', 'Trg bana Jelačića 1, Split', '09876543210987654321', NULL, 2, 'ana.kovacic@example.com', 1, 'EXT9876543210', 'F'),
('Marko', 'Novak', 'Strossmayerova 12, Osijek', '11223344556677889900', '98765432100', 1, 'marko.novak@example.com', 0, 'EXT1122334455', 'M');

INSERT INTO Policies (PolicyNumber, Amount, PartnerId)
VALUES
('POL0012345', 5000.00, 1),
('POL0098765', 7500.50, 2),
('POL1122334', 10000.00, 3);

SELECT * FROM Partners;

SELECT * FROM Policies;
