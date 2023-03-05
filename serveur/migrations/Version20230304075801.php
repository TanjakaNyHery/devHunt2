<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230304075801 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(120) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commentaire (id INT AUTO_INCREMENT NOT NULL, question_id INT DEFAULT NULL, user_id INT DEFAULT NULL, comment LONGTEXT NOT NULL, INDEX IDX_67F068BC1E27F6BF (question_id), INDEX IDX_67F068BCA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE question (id INT AUTO_INCREMENT NOT NULL, relate_id INT DEFAULT NULL, label VARCHAR(255) NOT NULL, fichier VARCHAR(255) DEFAULT NULL, INDEX IDX_B6F7494EB643F650 (relate_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE question_categorie (question_id INT NOT NULL, categorie_id INT NOT NULL, INDEX IDX_40A892AF1E27F6BF (question_id), INDEX IDX_40A892AFBCF5E72D (categorie_id), PRIMARY KEY(question_id, categorie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reponse_commentaire (id INT AUTO_INCREMENT NOT NULL, commentaire_id INT DEFAULT NULL, user_id INT DEFAULT NULL, reponse LONGTEXT NOT NULL, INDEX IDX_6E5B5DB9BA9CD190 (commentaire_id), INDEX IDX_6E5B5DB9A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, nom VARCHAR(70) NOT NULL, prenom VARCHAR(100) NOT NULL, parcours VARCHAR(3) NOT NULL, niveau VARCHAR(3) DEFAULT NULL, matricule VARCHAR(10) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BC1E27F6BF FOREIGN KEY (question_id) REFERENCES question (id)');
        $this->addSql('ALTER TABLE commentaire ADD CONSTRAINT FK_67F068BCA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE question ADD CONSTRAINT FK_B6F7494EB643F650 FOREIGN KEY (relate_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE question_categorie ADD CONSTRAINT FK_40A892AF1E27F6BF FOREIGN KEY (question_id) REFERENCES question (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE question_categorie ADD CONSTRAINT FK_40A892AFBCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reponse_commentaire ADD CONSTRAINT FK_6E5B5DB9BA9CD190 FOREIGN KEY (commentaire_id) REFERENCES commentaire (id)');
        $this->addSql('ALTER TABLE reponse_commentaire ADD CONSTRAINT FK_6E5B5DB9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BC1E27F6BF');
        $this->addSql('ALTER TABLE commentaire DROP FOREIGN KEY FK_67F068BCA76ED395');
        $this->addSql('ALTER TABLE question DROP FOREIGN KEY FK_B6F7494EB643F650');
        $this->addSql('ALTER TABLE question_categorie DROP FOREIGN KEY FK_40A892AF1E27F6BF');
        $this->addSql('ALTER TABLE question_categorie DROP FOREIGN KEY FK_40A892AFBCF5E72D');
        $this->addSql('ALTER TABLE reponse_commentaire DROP FOREIGN KEY FK_6E5B5DB9BA9CD190');
        $this->addSql('ALTER TABLE reponse_commentaire DROP FOREIGN KEY FK_6E5B5DB9A76ED395');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE commentaire');
        $this->addSql('DROP TABLE question');
        $this->addSql('DROP TABLE question_categorie');
        $this->addSql('DROP TABLE reponse_commentaire');
        $this->addSql('DROP TABLE user');
    }
}
