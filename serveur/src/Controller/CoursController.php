<?php

namespace App\Controller;

use App\Repository\CoursRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CoursController extends AbstractController
{

    #[Route('/apip/cours', name: 'app_consult_cours')]
    public function index(CoursRepository $coursRepository): JsonResponse
    {
        $listCours = $coursRepository->findAll();

        $data = array();
        foreach($listCours as $cours) {
            array_push($data, array(
                'id' => $cours->getId(),
                'label' => $cours->getLabel(),
                'fichier' => $cours->getFichier()
            ));
        }

        return $this->json($data);
    }
}
