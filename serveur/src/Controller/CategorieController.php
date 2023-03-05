<?php

namespace App\Controller;

use App\Repository\CategorieRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategorieController extends AbstractController
{
    #[Route('/api/categorie', name: 'app_categorie')]
    public function index(SerializerInterface $serializer, CategorieRepository $categorieRepository): JsonResponse
    {
        $listCategorie = $categorieRepository->findAll();

        $data = array();
        foreach($listCategorie as $categorie) {
            array_push($data, array(
                'id' => $categorie->getId(),
                'nom' => $categorie->getNom(),
                'questions' => $categorie->getQuestions()
            ));
        }

        return $this->json($data);
    }
}
