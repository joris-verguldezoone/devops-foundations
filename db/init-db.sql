-- fichier: init_db.sql

-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,       -- identifiant unique auto-incrémenté
    email VARCHAR(255) UNIQUE NOT NULL,  -- email unique
    password VARCHAR(255) NOT NULL,      -- mot de passe (hashé en pratique)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Création de la table mails
CREATE TABLE IF NOT EXISTS mails (
    id SERIAL PRIMARY KEY,        -- identifiant unique du mail
    user_id INT NOT NULL,         -- id de l'utilisateur qui a envoyé le mail
    recipient_email VARCHAR(255) NOT NULL,  -- email du destinataire
    subject VARCHAR(255),         -- sujet du mail
    body TEXT,                    -- contenu du mail
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
