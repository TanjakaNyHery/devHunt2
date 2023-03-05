<?php

namespace App\Controller\Admin;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use Vich\UploaderBundle\Form\Type\VichImageType;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserCrudController extends AbstractCrudController
{
    private $hash;

    public function __construct(UserPasswordHasherInterface $pass)
    {
        $this->hash = $pass;
    }


    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if(!$entityInstance instanceof User) return;
        $mdp = $entityInstance->getPassword();

        $entityInstance->setPassword($this->hash->hashPassword($entityInstance, $mdp));

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')->hideOnForm();
        yield TextField::new('nom');
        yield TextField::new('prenom');
        yield TextField::new('parcours');
        yield TextField::new('niveau');
        yield TextField::new('matricule');
        yield TextField::new('imageFile')->setFormType(VichImageType::class)->onlyOnForms()->setRequired(true);
        yield ImageField::new('photo')->setBasePath('/uploads/image/profile')->onlyOnIndex();
        yield EmailField::new('email');
        yield TextField::new('password')->onlyOnForms();
        yield ArrayField::new('roles');
    }
    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
