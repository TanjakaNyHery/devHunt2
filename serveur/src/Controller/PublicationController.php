<?php

namespace App\Controller;

use App\Entity\Question;
use App\Repository\UserRepository;
use App\Repository\CategorieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PublicationController extends AbstractController
{
    #[Route('/api/publierQuestion', name: 'app_publication', methods: ['POST'])]
    public function index(Request $request, UserRepository $userRepository, CategorieRepository $categorieRepositorys, EntityManagerInterface $em): JsonResponse
    {
        /**
         * Récuperer les données post
         */
        $donnees = json_decode($request->getContent());

        $user = $userRepository->find($donnees->user);

        $categorie = $categorieRepositorys->find($donnees->categorie);

        $label = $donnees->label;

        $publication = new Question();

        $publication->setLabel($label);
        $publication->addRelation($categorie);
        $publication->setRelate($user);

        /**
         * Creer une ligne sur encherir
         */
        $em->persist($publication);
        $em->flush();

        /**
         * Retourner une réponse
         */
        return new JsonResponse("", Response::HTTP_CREATED);
    }
}
